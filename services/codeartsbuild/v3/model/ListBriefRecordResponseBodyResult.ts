import { BriefRecordItems } from './BriefRecordItems';


export class ListBriefRecordResponseBodyResult {
    private 'project_id'?: string;
    private 'brief_build_record_dtos'?: Array<BriefRecordItems>;
    public constructor() { 
    }
    public withProjectId(projectId: string): ListBriefRecordResponseBodyResult {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBriefBuildRecordDtos(briefBuildRecordDtos: Array<BriefRecordItems>): ListBriefRecordResponseBodyResult {
        this['brief_build_record_dtos'] = briefBuildRecordDtos;
        return this;
    }
    public set briefBuildRecordDtos(briefBuildRecordDtos: Array<BriefRecordItems>  | undefined) {
        this['brief_build_record_dtos'] = briefBuildRecordDtos;
    }
    public get briefBuildRecordDtos(): Array<BriefRecordItems> | undefined {
        return this['brief_build_record_dtos'];
    }
}