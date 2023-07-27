import { ResetPassword } from './ResetPassword';


export class ResetPasswordBody {
    private 'reset-password'?: ResetPassword;
    public constructor(resetPassword?: ResetPassword) { 
        this['reset-password'] = resetPassword;
    }
    public withResetPassword(resetPassword: ResetPassword): ResetPasswordBody {
        this['reset-password'] = resetPassword;
        return this;
    }
    public set resetPassword(resetPassword: ResetPassword  | undefined) {
        this['reset-password'] = resetPassword;
    }
    public get resetPassword(): ResetPassword | undefined {
        return this['reset-password'];
    }
}