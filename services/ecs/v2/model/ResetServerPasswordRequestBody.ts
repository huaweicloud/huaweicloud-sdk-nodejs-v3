import { ResetServerPasswordOption } from './ResetServerPasswordOption';


export class ResetServerPasswordRequestBody {
    private 'reset-password': ResetServerPasswordOption | undefined;
    public constructor(resetPassword?: any) { 
        this['reset-password'] = resetPassword;
    }
    public withResetPassword(resetPassword: ResetServerPasswordOption): ResetServerPasswordRequestBody {
        this['reset-password'] = resetPassword;
        return this;
    }
    public set resetPassword(resetPassword: ResetServerPasswordOption | undefined) {
        this['reset-password'] = resetPassword;
    }
    public get resetPassword() {
        return this['reset-password'];
    }
}