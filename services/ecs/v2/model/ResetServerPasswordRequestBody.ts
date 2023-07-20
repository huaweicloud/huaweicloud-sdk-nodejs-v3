import { ResetServerPasswordOption } from './ResetServerPasswordOption';


export class ResetServerPasswordRequestBody {
    private 'reset-password'?: ResetServerPasswordOption;
    public constructor(resetPassword?: ResetServerPasswordOption) { 
        this['reset-password'] = resetPassword;
    }
    public withResetPassword(resetPassword: ResetServerPasswordOption): ResetServerPasswordRequestBody {
        this['reset-password'] = resetPassword;
        return this;
    }
    public set resetPassword(resetPassword: ResetServerPasswordOption  | undefined) {
        this['reset-password'] = resetPassword;
    }
    public get resetPassword(): ResetServerPasswordOption | undefined {
        return this['reset-password'];
    }
}