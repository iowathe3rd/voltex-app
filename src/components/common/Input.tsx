import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input as InputBase } from "@/components/ui/input";
import React from "react";

import { authFormSchema } from "@/schemas/auth.schema";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";

const formSchema = authFormSchema("sign-up");

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}
const Input = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }: { field: any }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <InputBase
                placeholder={placeholder}
                className="input-class"
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default Input;
