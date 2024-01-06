/**
 * Date: 2023/11/28 18:22
 * Author: chonghe
 * Email: chong@intrii.com
 * Copyright: (c) 2023, 英荟科技有限公司
 */
import React from 'react';
import { atom, useAtom } from "helux";
const [testAtom, setTestAtom] = atom({ dd: 123 });

export const Test = () => {
  const [data, setData] = useAtom(testAtom);
  return (
    <div onClick={() => setData(draft => void (draft.dd += 100))}>helux in nextjs: clike me {data.dd}</div>
  );
};
