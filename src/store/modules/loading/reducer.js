/*
 * Copyright (c) 2020.3
 * Written by kj <ace@daiblab.com>
 *
 * This file is part of SellerVision-RN
 * Desc - api 통신 할 때 사용
 */

import { handleActions } from "redux-actions";
import * as LOADING from "./actions";

const initialState = {};

const loading = handleActions(
  {
    [LOADING.START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [LOADING.FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState
);

export default loading;
