import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppSelector } from './store.interface';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: AppSelector = useSelector;
