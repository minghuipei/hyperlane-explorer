import Image from 'next/future/image';
import { ChangeEvent } from 'react';

import SearchIcon from '../../images/icons/search.svg';
import XIcon from '../../images/icons/x.svg';
import { Spinner } from '../animation/Spinner';
import { IconButton } from '../buttons/IconButton';

interface Props {
  value: string;
  onChangeValue: (v: string) => void;
  fetching: boolean;
}

export function SearchBar({ value, onChangeValue, fetching }: Props) {
  const onChange = (event: ChangeEvent<HTMLInputElement> | null) => {
    const value = event?.target?.value || '';
    onChangeValue(value);
  };

  return (
    <div className="flex items-center bg-white w-full rounded shadow-md border border-blue-50">
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Search for messages by address or transaction hash"
        className="p-2 sm:px-4 md:px-5 flex-1 h-10 sm:h-12 rounded focus:outline-none"
      />
      <div className="bg-beige-300 h-10 sm:h-12 w-10 sm:w-12 flex items-center justify-center rounded">
        {fetching && <Spinner classes="scale-[30%] mr-2.5" />}
        {!fetching && !value && <Image src={SearchIcon} width={20} height={20} />}
        {!fetching && value && (
          <IconButton
            imgSrc={XIcon}
            title="Clear search"
            width={28}
            height={28}
            onClick={() => onChange(null)}
          />
        )}
      </div>
    </div>
  );
}
