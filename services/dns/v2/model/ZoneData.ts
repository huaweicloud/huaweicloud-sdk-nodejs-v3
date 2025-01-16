import { Link } from './Link';


export class ZoneData {
    public id?: string;
    public name?: string;
    public description?: string;
    public email?: string;
    public ttl?: string;
    public serial?: string;
    public masters?: string;
    public status?: string;
    private 'pool_id'?: string;
    private 'project_id'?: string;
    private 'zone_type'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'record_num'?: string;
    public links?: Link;
    public constructor() { 
    }
    public withId(id: string): ZoneData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ZoneData {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ZoneData {
        this['description'] = description;
        return this;
    }
    public withEmail(email: string): ZoneData {
        this['email'] = email;
        return this;
    }
    public withTtl(ttl: string): ZoneData {
        this['ttl'] = ttl;
        return this;
    }
    public withSerial(serial: string): ZoneData {
        this['serial'] = serial;
        return this;
    }
    public withMasters(masters: string): ZoneData {
        this['masters'] = masters;
        return this;
    }
    public withStatus(status: string): ZoneData {
        this['status'] = status;
        return this;
    }
    public withPoolId(poolId: string): ZoneData {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withProjectId(projectId: string): ZoneData {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withZoneType(zoneType: string): ZoneData {
        this['zone_type'] = zoneType;
        return this;
    }
    public set zoneType(zoneType: string  | undefined) {
        this['zone_type'] = zoneType;
    }
    public get zoneType(): string | undefined {
        return this['zone_type'];
    }
    public withCreatedAt(createdAt: string): ZoneData {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ZoneData {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withRecordNum(recordNum: string): ZoneData {
        this['record_num'] = recordNum;
        return this;
    }
    public set recordNum(recordNum: string  | undefined) {
        this['record_num'] = recordNum;
    }
    public get recordNum(): string | undefined {
        return this['record_num'];
    }
    public withLinks(links: Link): ZoneData {
        this['links'] = links;
        return this;
    }
}