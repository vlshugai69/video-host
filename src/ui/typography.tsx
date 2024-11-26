import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export const typographyVariants = cva("text-xl", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg: text-4xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 overflow-ellipsis",
      span: "leading-7 overflow-ellipsis",
      // blockquote: "mt-6 border-l-2 pl-6 italic",
      // list: "my-6 ml-6 list-disc [&>li]:mt-2",
    },
    affects: {
      default: "",
      "2xlarge": "text-2xl font-medium",
      large: "text-lg font-semibold",
      medium: "text-md font-medium leading-none",
      small: "text-sm font-medium leading-none",
      muted: "text-xs font-normal text-white-200",
      removePMargin: "[&:not(:first-child)]:mt-0",
    },
    noWrap: {
      true: "whitespace-nowrap overflow-hidden text-ellipsis",
      false: "",
    },
  },
  defaultVariants: {
    variant: "p",
    affects: "default",
    noWrap: false,
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {}

const Typography = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, variant, affects, noWrap, ...props }, ref) => {
    const Comp = variant || "p";
    return (
      <Comp
        className={cn(
          typographyVariants({ variant, affects, noWrap, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Typography.displayName = "H1";

export default Typography;
