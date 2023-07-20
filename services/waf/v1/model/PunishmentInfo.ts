

export class PunishmentInfo {
    public id?: string;
    public policyid?: string;
    private 'block_time'?: number;
    public category?: string;
    public description?: string;
    public timestamp?: number;
    public constructor() { 
    }
    public withId(id: string): PunishmentInfo {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): PunishmentInfo {
        this['policyid'] = policyid;
        return this;
    }
    public withBlockTime(blockTime: number): PunishmentInfo {
        this['block_time'] = blockTime;
        return this;
    }
    public set blockTime(blockTime: number  | undefined) {
        this['block_time'] = blockTime;
    }
    public get blockTime(): number | undefined {
        return this['block_time'];
    }
    public withCategory(category: string): PunishmentInfo {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): PunishmentInfo {
        this['description'] = description;
        return this;
    }
    public withTimestamp(timestamp: number): PunishmentInfo {
        this['timestamp'] = timestamp;
        return this;
    }
}