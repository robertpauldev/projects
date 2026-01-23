import { useEffect, useMemo, useState } from "react";
import type { TableEntry } from "../utils/types";

export const useBudgetCategory = ( storageKey: string ) => {

  const [ data, setData ] = useState<TableEntry[]>(
    () => {
      const cached = localStorage.getItem( storageKey );
      return cached ? JSON.parse( cached ) : [];
    }
  );

  const total = useMemo(
    () => data.reduce((sum, entry) => sum + entry.sum, 0),
    [data]
  );

  useEffect(
    () => localStorage.setItem( storageKey, JSON.stringify( data ) ),
    [ data, storageKey ]
  );

  const add = ( entry: TableEntry ) => {
    setData( ( prev ) => [ ...prev, entry ] );
  };

  const remove = ( id: string ) => {
    setData( ( prev ) => prev.filter( ( entry ) => entry.id !== id ) );
  };

  return { data, total, add, remove };
};
