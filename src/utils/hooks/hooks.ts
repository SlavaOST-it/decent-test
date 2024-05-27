import {useDispatch, useSelector} from "react-redux"
import {AppDispatchType, RootState} from "../../state/store";


export const useAppDispatch: () => AppDispatchType = useDispatch
export const useAppSelector = useSelector.withTypes<RootState>()
