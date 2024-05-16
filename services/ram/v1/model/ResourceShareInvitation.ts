

export class ResourceShareInvitation {
    private 'receiver_account_id'?: string;
    private 'resource_share_id'?: string;
    private 'resource_share_name'?: string;
    private 'resource_share_invitation_id'?: string;
    private 'sender_account_id'?: string;
    public status?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withReceiverAccountId(receiverAccountId: string): ResourceShareInvitation {
        this['receiver_account_id'] = receiverAccountId;
        return this;
    }
    public set receiverAccountId(receiverAccountId: string  | undefined) {
        this['receiver_account_id'] = receiverAccountId;
    }
    public get receiverAccountId(): string | undefined {
        return this['receiver_account_id'];
    }
    public withResourceShareId(resourceShareId: string): ResourceShareInvitation {
        this['resource_share_id'] = resourceShareId;
        return this;
    }
    public set resourceShareId(resourceShareId: string  | undefined) {
        this['resource_share_id'] = resourceShareId;
    }
    public get resourceShareId(): string | undefined {
        return this['resource_share_id'];
    }
    public withResourceShareName(resourceShareName: string): ResourceShareInvitation {
        this['resource_share_name'] = resourceShareName;
        return this;
    }
    public set resourceShareName(resourceShareName: string  | undefined) {
        this['resource_share_name'] = resourceShareName;
    }
    public get resourceShareName(): string | undefined {
        return this['resource_share_name'];
    }
    public withResourceShareInvitationId(resourceShareInvitationId: string): ResourceShareInvitation {
        this['resource_share_invitation_id'] = resourceShareInvitationId;
        return this;
    }
    public set resourceShareInvitationId(resourceShareInvitationId: string  | undefined) {
        this['resource_share_invitation_id'] = resourceShareInvitationId;
    }
    public get resourceShareInvitationId(): string | undefined {
        return this['resource_share_invitation_id'];
    }
    public withSenderAccountId(senderAccountId: string): ResourceShareInvitation {
        this['sender_account_id'] = senderAccountId;
        return this;
    }
    public set senderAccountId(senderAccountId: string  | undefined) {
        this['sender_account_id'] = senderAccountId;
    }
    public get senderAccountId(): string | undefined {
        return this['sender_account_id'];
    }
    public withStatus(status: string): ResourceShareInvitation {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: Date): ResourceShareInvitation {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ResourceShareInvitation {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}