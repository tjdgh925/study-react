import React, { useState, useEffect, useReducer, useMemo, useCallback } from 'react';
import { number } from 'yargs';

const ReactHooks = () => {
  const input: string = '특정 값';

  //useState
  const [text, setText] = useState<string>('');

  //useEffect

  //마운트와 업데이트 될 모든 경우에 실행하는 경우
  useEffect(() => {
    console.log('렌더링 완료');
  });

  //맨 처음 렌더링 될 때(마운트)할 때만 실행하는 경우
  useEffect(() => {
    console.log('오로직 마운트 될 경우만');
  }, []);

  //특정 값이 업데이트될 때만 실행하고 싶을 때
  useEffect(() => {
    console.log('특정 값이 업데이트 될 경우만');
  }, [input]);

  //뒷정리하기
  useEffect(() => {
    console.log(
      '기본적으로 렌더링되고 난 직후마다 실행되며, 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라집니다.'
    );
    return () => {
      console.log('clean up');
    };
  }, [input]);

  //useReducer
  function reducer(state, action) {
    switch ((action, type)) {
      case 'caseA':
        return {
          /* state A*/
        };
      case 'caseB':
        return {
          /* state A*/
        };
    }
    
    const [state, dispatch] = useReducer(reducer, { value: 0 });

    //useMemo
    const getAverage = (numbers: number[]) : number => {
      console.log('평균값 계산 중,,')
      if (numbers.length == 0) return 0;
      const sum: number = numbers.reduce((a, b) => a + b);
      return sum / numbers.length;
    }

    const [list, setList] = useState<number[]>([]);
    const [number1, setNumber1] = useState<number>(0);

    const avg: number = useMemo(() => getAverage(list), [list]);
    
    //useCallback

    const onChange = useCallback(
      (e: React.ChangeEvent): void => 
        setNumber1(e.target.value),
      []
    );

    const onInsert = useCallback(() => {
      const nextList: number[] = list.concat(number1);
      setList(nextList);
      setNumber1(0);
    }, [number, list]);

};


//CustomHooks
