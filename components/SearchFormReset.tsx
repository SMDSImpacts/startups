'use client'

import { X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

    

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;
        if (form) form.reset()
    }
  return (
    <div>
        <Button type="reset" onClick={reset}>
            <Link href="/">
            <X size={25} />
            </Link>
        </Button>

    </div>
  )
};

export default SearchFormReset;
