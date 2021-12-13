/* eslint-disable spaced-comment */
export type ILoginPayloadRtn = {
  success: boolean;
  data: {
    id: string;
    name: string;
    image: string;
    email: string;
    wp_num_inc_code: string;
    user_status: string;
    is_user_deactivated: string;
    user_type: string;
    auth_token: string;
    message: string;
    stores: []; //litrel type
  };
  message: string;
};

export type ILoginArg = {
  username: string;
  password: string;
};

export type ILoginRejectedPayload = {
  success: boolean;
  message: string;
};

export type ILoginStateType = {
  loading: boolean;
  success: boolean;
  message: string;
};
