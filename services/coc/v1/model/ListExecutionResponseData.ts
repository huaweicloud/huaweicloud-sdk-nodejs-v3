import { CreateDocumentRequestBodyTags } from './CreateDocumentRequestBodyTags';
import { ListExecutionResponseParameters } from './ListExecutionResponseParameters';
import { Target } from './Target';


export class ListExecutionResponseData {
    private 'execution_id'?: string;
    private 'document_name'?: string;
    private 'document_id'?: string;
    private 'document_version_id'?: string;
    private 'document_version'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'update_time'?: number;
    public creator?: string;
    public status?: string;
    public description?: string;
    public parameters?: Array<ListExecutionResponseParameters>;
    private 'sys_tags'?: Array<CreateDocumentRequestBodyTags>;
    public tags?: Array<CreateDocumentRequestBodyTags>;
    public type?: string;
    private 'target_parameter_name'?: string;
    public targets?: Array<Target>;
    public constructor() { 
    }
    public withExecutionId(executionId: string): ListExecutionResponseData {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withDocumentName(documentName: string): ListExecutionResponseData {
        this['document_name'] = documentName;
        return this;
    }
    public set documentName(documentName: string  | undefined) {
        this['document_name'] = documentName;
    }
    public get documentName(): string | undefined {
        return this['document_name'];
    }
    public withDocumentId(documentId: string): ListExecutionResponseData {
        this['document_id'] = documentId;
        return this;
    }
    public set documentId(documentId: string  | undefined) {
        this['document_id'] = documentId;
    }
    public get documentId(): string | undefined {
        return this['document_id'];
    }
    public withDocumentVersionId(documentVersionId: string): ListExecutionResponseData {
        this['document_version_id'] = documentVersionId;
        return this;
    }
    public set documentVersionId(documentVersionId: string  | undefined) {
        this['document_version_id'] = documentVersionId;
    }
    public get documentVersionId(): string | undefined {
        return this['document_version_id'];
    }
    public withDocumentVersion(documentVersion: string): ListExecutionResponseData {
        this['document_version'] = documentVersion;
        return this;
    }
    public set documentVersion(documentVersion: string  | undefined) {
        this['document_version'] = documentVersion;
    }
    public get documentVersion(): string | undefined {
        return this['document_version'];
    }
    public withStartTime(startTime: number): ListExecutionResponseData {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListExecutionResponseData {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withUpdateTime(updateTime: number): ListExecutionResponseData {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withCreator(creator: string): ListExecutionResponseData {
        this['creator'] = creator;
        return this;
    }
    public withStatus(status: string): ListExecutionResponseData {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): ListExecutionResponseData {
        this['description'] = description;
        return this;
    }
    public withParameters(parameters: Array<ListExecutionResponseParameters>): ListExecutionResponseData {
        this['parameters'] = parameters;
        return this;
    }
    public withSysTags(sysTags: Array<CreateDocumentRequestBodyTags>): ListExecutionResponseData {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<CreateDocumentRequestBodyTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<CreateDocumentRequestBodyTags> | undefined {
        return this['sys_tags'];
    }
    public withTags(tags: Array<CreateDocumentRequestBodyTags>): ListExecutionResponseData {
        this['tags'] = tags;
        return this;
    }
    public withType(type: string): ListExecutionResponseData {
        this['type'] = type;
        return this;
    }
    public withTargetParameterName(targetParameterName: string): ListExecutionResponseData {
        this['target_parameter_name'] = targetParameterName;
        return this;
    }
    public set targetParameterName(targetParameterName: string  | undefined) {
        this['target_parameter_name'] = targetParameterName;
    }
    public get targetParameterName(): string | undefined {
        return this['target_parameter_name'];
    }
    public withTargets(targets: Array<Target>): ListExecutionResponseData {
        this['targets'] = targets;
        return this;
    }
}