import { cn } from "@/shared/lib";
import { useState, type ChangeEvent, type InputHTMLAttributes, type ReactNode } from "react";
import styles from './Input.module.scss'
import { Button } from "../Button/Button";
import HideIcon from '@/shared/assets/icons/Hide.svg?react';
import ShowIcon from '@/shared/assets/icons/Show.svg?react';

type HTMLInputType = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends HTMLInputType {
    className?: string;
    value?: string;
    disabled?: boolean;
    rounded?: boolean;
    Icon?: ReactNode;
    onChange?: (value: string) => void;
}
export const Input = (props: InputProps) => {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [focus, setFocus] = useState<boolean>(false);
    const {
        className,
        value,
        disabled = false,
        rounded = false,
        type = 'text',
        Icon,
        onChange,
        ...rest
    } = props;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    }

    const handleFocus = () => {
        setFocus(true);
    }

    const handleBlur = () => {
        setFocus(false);
    }

    return <div className={cn(styles.inputContainer, className, {
        [styles.rounded]: rounded,
        [styles.disabled]: disabled,
        [styles.focus]: focus,
    })}>
        {Icon}
        <input
            {...rest}
            value={value}
            disabled={disabled}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type = {showPassword && type==='password' ? 'text' : type}
            className={cn(styles.input, {
                [styles.disabled]: disabled,
            })} />
        {type === 'password' && (
            <Button
                theme="ghost"
                type="button"
                className={styles.toggleVisibility}
                onClick={toggleShowPassword}>
                {showPassword ? <HideIcon /> : <ShowIcon />}
            </Button>
        )}
    </div>
}