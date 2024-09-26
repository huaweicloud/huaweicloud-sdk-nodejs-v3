import { CreatedAt } from './CreatedAt';
import { Description } from './Description';
import { UUID64Identifier } from './UUID64Identifier';
import { UpdatedAt } from './UpdatedAt';


export class GlobalConnectionBandwidthLineLevel {
    public id?: string;
    public description?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'local_area'?: string;
    private 'remote_area'?: string;
    public levels?: Array<string>;
    public constructor(id?: string, createdAt?: Date, updatedAt?: Date) { 
        this['id'] = id;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): GlobalConnectionBandwidthLineLevel {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): GlobalConnectionBandwidthLineLevel {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: Date): GlobalConnectionBandwidthLineLevel {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): GlobalConnectionBandwidthLineLevel {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withLocalArea(localArea: string): GlobalConnectionBandwidthLineLevel {
        this['local_area'] = localArea;
        return this;
    }
    public set localArea(localArea: string  | undefined) {
        this['local_area'] = localArea;
    }
    public get localArea(): string | undefined {
        return this['local_area'];
    }
    public withRemoteArea(remoteArea: string): GlobalConnectionBandwidthLineLevel {
        this['remote_area'] = remoteArea;
        return this;
    }
    public set remoteArea(remoteArea: string  | undefined) {
        this['remote_area'] = remoteArea;
    }
    public get remoteArea(): string | undefined {
        return this['remote_area'];
    }
    public withLevels(levels: Array<string>): GlobalConnectionBandwidthLineLevel {
        this['levels'] = levels;
        return this;
    }
}