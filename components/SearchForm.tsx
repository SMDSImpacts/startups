import React from "react";
import Form from "next/form"
import { Input } from "./ui/input";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({query}: {query? : string}) => {
  
  return (
    <Form action="/" scroll={false} className="">
      <div className="flex">
      
      <Input
        name="query"
        defaultValue={query}
        placeholder="Search startups"
        className="text-white"
      />

        {query && <SearchFormReset />}
        <button type="submit" className="text-white mr-4 hover:cursor-pointer">
        <Search size={25} />
      </button>
      
      </div>
      
    </Form>
  )
};

export default SearchForm;
