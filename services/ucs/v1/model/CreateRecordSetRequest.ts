import { CreateRecordSetRequestBody } from './CreateRecordSetRequestBody';


export class CreateRecordSetRequest {
    private 'X-Zone-Project-ID'?: string;
    private 'X-Zone-ID'?: string;
    public body?: Array<CreateRecordSetRequestBody>;
    public constructor(xZoneProjectID?: string, xZoneID?: string) { 
        this['X-Zone-Project-ID'] = xZoneProjectID;
        this['X-Zone-ID'] = xZoneID;
    }
    public withXZoneProjectID(xZoneProjectID: string): CreateRecordSetRequest {
        this['X-Zone-Project-ID'] = xZoneProjectID;
        return this;
    }
    public set xZoneProjectID(xZoneProjectID: string  | undefined) {
        this['X-Zone-Project-ID'] = xZoneProjectID;
    }
    public get xZoneProjectID(): string | undefined {
        return this['X-Zone-Project-ID'];
    }
    public withXZoneID(xZoneID: string): CreateRecordSetRequest {
        this['X-Zone-ID'] = xZoneID;
        return this;
    }
    public set xZoneID(xZoneID: string  | undefined) {
        this['X-Zone-ID'] = xZoneID;
    }
    public get xZoneID(): string | undefined {
        return this['X-Zone-ID'];
    }
    public withBody(body: Array<CreateRecordSetRequestBody>): CreateRecordSetRequest {
        this['body'] = body;
        return this;
    }
}