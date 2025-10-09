

export class UpdateLoginProfileReqBody {
    public password?: string;
    private 'password_reset_required'?: boolean;
    public constructor() { 
    }
    public withPassword(password: string): UpdateLoginProfileReqBody {
        this['password'] = password;
        return this;
    }
    public withPasswordResetRequired(passwordResetRequired: boolean): UpdateLoginProfileReqBody {
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