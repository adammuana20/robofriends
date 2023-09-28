import { ChangeEvent } from "react"

type SearchBoxProps = {
    searchChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function SearchBox({searchChange}: SearchBoxProps){
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type='search' 
                placeholder="search robots" 
                onChange={searchChange}
            />
        </div>
    )
}