

export class CreateLoginProfileReqBody {
    public password?: string;
    private 'password_reset_required'?: boolean;
    public constructor(password?: string, passwordResetRequired?: boolean) { 
        this['password'] = password;
        this['password_reset_required'] = passwordResetRequired;
    }
    public withPassword(password: string): CreateLoginProfileReqBody {
        this['password'] = password;
        return this;
    }
    public withPasswordResetRequired(passwordResetRequired: boolean): CreateLoginProfileReqBody {
        this['password_reset_required'] = passwordResetRequired;
        return this;
    }
    public set passwordResetRequired(passwordResetRequired: boolean  | undefined) {
        this['password_reset_required'] = passwordResetRequired;
    }
    public get passwordResetRequired(): boolean | undefined {
        return this['password_reset_required'];
    }
}