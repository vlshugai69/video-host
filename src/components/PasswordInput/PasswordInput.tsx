import { forwardRef } from "react";
import { Input } from "@/ui/input";
import type { PasswordInputProps } from "./types";
import { useToggle } from "@react-hookz/web";
import { Eye, EyeClosed } from "lucide-react";

const PasswordInput = forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>((props, ref) => {
  const [showPassword, toggleShowPassword] = useToggle();

  return (
    <div className="relative">
      <Input
        {...props}
        ref={ref}
        placeholder="Password"
        type={showPassword ? "text" : "password"}
      />
      <div className="cursor-pointer absolute right-3 top-2/4 -translate-y-1/2">
        {!showPassword ? (
          <Eye onClick={toggleShowPassword} />
        ) : (
          <EyeClosed onClick={toggleShowPassword} />
        )}
      </div>
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
