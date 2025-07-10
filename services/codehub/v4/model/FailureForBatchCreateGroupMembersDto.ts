

export class FailureForBatchCreateGroupMembersDto {
    private 'iam_id'?: string;
    public message?: Array<string>;
    public constructor() { 
    }
    public withIamId(iamId: string): FailureForBatchCreateGroupMembersDto {
        this['iam_id'] = iamId;
        return this;
    }
    public set iamId(iamId: string  | undefined) {
        this['iam_id'] = iamId;
    }
    public get iamId(): string | undefined {
        return this['iam_id'];
    }
    public withMessage(message: Array<string>): FailureForBatchCreateGroupMembersDto {
        this['message'] = message;
        return this;
    }
}