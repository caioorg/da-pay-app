import { atom } from 'recoil'

const showFullLoadingState = atom({ key: "showFullLoadingState", default: { value: false } as { value: boolean; timeout?: number } });
const showDialog = atom({ key: "showDialog", default: false as boolean });

export { showFullLoadingState, showDialog };
