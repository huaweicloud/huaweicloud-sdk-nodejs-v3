import { RelationInfo } from './RelationInfo';


export class AddRelationsInfo {
    public relations?: Array<RelationInfo>;
    private 'tracker_id'?: string;
    private 'version_uri'?: string;
    private 'task_uri'?: string;
    private 'add_to_iterator'?: boolean;
    private 'project_uuid'?: string;
    public constructor() { 
    }
    public withRelations(relations: Array<RelationInfo>): AddRelationsInfo {
        this['relations'] = relations;
        return this;
    }
    public withTrackerId(trackerId: string): AddRelationsInfo {
        this['tracker_id'] = trackerId;
        return this;
    }
    public set trackerId(trackerId: string  | undefined) {
        this['tracker_id'] = trackerId;
    }
    public get trackerId(): string | undefined {
        return this['tracker_id'];
    }
    public withVersionUri(versionUri: string): AddRelationsInfo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withTaskUri(taskUri: string): AddRelationsInfo {
        this['task_uri'] = taskUri;
        return this;
    }
    public set taskUri(taskUri: string  | undefined) {
        this['task_uri'] = taskUri;
    }
    public get taskUri(): string | undefined {
        return this['task_uri'];
    }
    public withAddToIterator(addToIterator: boolean): AddRelationsInfo {
        this['add_to_iterator'] = addToIterator;
        return this;
    }
    public set addToIterator(addToIterator: boolean  | undefined) {
        this['add_to_iterator'] = addToIterator;
    }
    public get addToIterator(): boolean | undefined {
        return this['add_to_iterator'];
    }
    public withProjectUuid(projectUuid: string): AddRelationsInfo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
}