import { IpBlacklistImportDto } from './IpBlacklistImportDto';


export class ImportIpBlacklistRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    public body?: IpBlacklistImportDto;
    public constructor(projectId?: string, fwInstanceId?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
    }
    public withProjectId(projectId: string): ImportIpBlacklistRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ImportIpBlacklistRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withBody(body: IpBlacklistImportDto): ImportIpBlacklistRequest {
        this['body'] = body;
        return this;
    }
}