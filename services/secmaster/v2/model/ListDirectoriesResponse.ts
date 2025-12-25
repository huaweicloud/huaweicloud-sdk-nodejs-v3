import { DirectoryI18N } from './DirectoryI18N';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDirectoriesResponse extends SdkResponse {
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    public directories?: Array<string>;
    private 'directory_i18ns'?: Array<DirectoryI18N>;
    public constructor() { 
        super();
    }
    public withProjectId(projectId: string): ListDirectoriesResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): ListDirectoriesResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDirectories(directories: Array<string>): ListDirectoriesResponse {
        this['directories'] = directories;
        return this;
    }
    public withDirectoryI18ns(directoryI18ns: Array<DirectoryI18N>): ListDirectoriesResponse {
        this['directory_i18ns'] = directoryI18ns;
        return this;
    }
    public set directoryI18ns(directoryI18ns: Array<DirectoryI18N>  | undefined) {
        this['directory_i18ns'] = directoryI18ns;
    }
    public get directoryI18ns(): Array<DirectoryI18N> | undefined {
        return this['directory_i18ns'];
    }
}