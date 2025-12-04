

export class ListFoldersAndFilesRequest {
    private 'user_name'?: string;
    private 'cloud_storage_assignment_id'?: string;
    private 'folder_url'?: string;
    public marker?: string;
    public limit?: number;
    public constructor(userName?: string, folderUrl?: string) { 
        this['user_name'] = userName;
        this['folder_url'] = folderUrl;
    }
    public withUserName(userName: string): ListFoldersAndFilesRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withCloudStorageAssignmentId(cloudStorageAssignmentId: string): ListFoldersAndFilesRequest {
        this['cloud_storage_assignment_id'] = cloudStorageAssignmentId;
        return this;
    }
    public set cloudStorageAssignmentId(cloudStorageAssignmentId: string  | undefined) {
        this['cloud_storage_assignment_id'] = cloudStorageAssignmentId;
    }
    public get cloudStorageAssignmentId(): string | undefined {
        return this['cloud_storage_assignment_id'];
    }
    public withFolderUrl(folderUrl: string): ListFoldersAndFilesRequest {
        this['folder_url'] = folderUrl;
        return this;
    }
    public set folderUrl(folderUrl: string  | undefined) {
        this['folder_url'] = folderUrl;
    }
    public get folderUrl(): string | undefined {
        return this['folder_url'];
    }
    public withMarker(marker: string): ListFoldersAndFilesRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListFoldersAndFilesRequest {
        this['limit'] = limit;
        return this;
    }
}