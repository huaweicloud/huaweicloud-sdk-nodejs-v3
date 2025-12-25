

export class CapacitySettingVO {
    private 'capacity_threshold'?: number;
    private 'message_type'?: number;
    private 'is_mail_enabled'?: number;
    private 'is_sms_enabled'?: number;
    public constructor() { 
    }
    public withCapacityThreshold(capacityThreshold: number): CapacitySettingVO {
        this['capacity_threshold'] = capacityThreshold;
        return this;
    }
    public set capacityThreshold(capacityThreshold: number  | undefined) {
        this['capacity_threshold'] = capacityThreshold;
    }
    public get capacityThreshold(): number | undefined {
        return this['capacity_threshold'];
    }
    public withMessageType(messageType: number): CapacitySettingVO {
        this['message_type'] = messageType;
        return this;
    }
    public set messageType(messageType: number  | undefined) {
        this['message_type'] = messageType;
    }
    public get messageType(): number | undefined {
        return this['message_type'];
    }
    public withIsMailEnabled(isMailEnabled: number): CapacitySettingVO {
        this['is_mail_enabled'] = isMailEnabled;
        return this;
    }
    public set isMailEnabled(isMailEnabled: number  | undefined) {
        this['is_mail_enabled'] = isMailEnabled;
    }
    public get isMailEnabled(): number | undefined {
        return this['is_mail_enabled'];
    }
    public withIsSmsEnabled(isSmsEnabled: number): CapacitySettingVO {
        this['is_sms_enabled'] = isSmsEnabled;
        return this;
    }
    public set isSmsEnabled(isSmsEnabled: number  | undefined) {
        this['is_sms_enabled'] = isSmsEnabled;
    }
    public get isSmsEnabled(): number | undefined {
        return this['is_sms_enabled'];
    }
}