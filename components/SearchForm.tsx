import React from "react";
import Form from "next/form"
import { Input } from "./ui/input";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm  = ({query}: {query? : string | undefined }) : React.JSX.Element => {

  return (
    <Form action="/" scroll={false} className="border border-gray-700 rounded-2xl bg-blue-400">
      <div className="flex">
      <Input
        name="query"
        defaultValue=""
        placeholder="Search startups"
        className="text-white border-none"
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
