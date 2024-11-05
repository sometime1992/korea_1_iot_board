// count.store.ts
// : 카운트값 전역 상태 관리

import { create } from "zustand";

//* interface: 스토어(전역 저장소)의 interface 정의 *//
interface CountStoreType {
  // 상태 필드 정의
  count: number;

  // 상태 업데이트 함수
  increment: () => void;
  decrement: () => void;
}

// 저장소 생성 함수: create<저장소 구조 interface>();
const useCountStore = create<CountStoreType>((set) => ({
  // 상태 필드 초기화
  count: 0,
  increment: () => set((state) => ({
    count: state.count + 1
  })),
  decrement: () => set((state) => ({
    count: state.count - 1
  })),
  // fixFive: () => set({ count: 5 })
}));

export default useCountStore;