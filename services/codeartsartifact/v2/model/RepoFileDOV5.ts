

export class RepoFileDOV5 {
    public id?: string;
    private 'file_id'?: string;
    private 'repo_name'?: string;
    private 'project_name'?: string;
    private 'parent_id'?: string;
    public name?: string;
    private 'file_name'?: string;
    public type?: string;
    public category?: string;
    public extension?: string;
    public path?: string;
    private 'full_path'?: string;
    public size?: number;
    public md5?: string;
    public sha256?: string;
    private 'download_url'?: string;
    private 'download_url_with_id'?: string;
    private 'web_url'?: string;
    private 'version_enable'?: boolean;
    private 'migrated_state'?: number;
    private 'upload_id'?: string;
    public constructor() { 
    }
    public withId(id: string): RepoFileDOV5 {
        this['id'] = id;
        return this;
    }
    public withFileId(fileId: string): RepoFileDOV5 {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
    public withRepoName(repoName: string): RepoFileDOV5 {
        this['repo_name'] = repoName;
        return this;
    }
    public set repoName(repoName: string  | undefined) {
        this['repo_name'] = repoName;
    }
    public get repoName(): string | undefined {
        return this['repo_name'];
    }
    public withProjectName(projectName: string): RepoFileDOV5 {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withParentId(parentId: string): RepoFileDOV5 {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withName(name: string): RepoFileDOV5 {
        this['name'] = name;
        return this;
    }
    public withFileName(fileName: string): RepoFileDOV5 {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withType(type: string): RepoFileDOV5 {
        this['type'] = type;
        return this;
    }
    public withCategory(category: string): RepoFileDOV5 {
        this['category'] = category;
        return this;
    }
    public withExtension(extension: string): RepoFileDOV5 {
        this['extension'] = extension;
        return this;
    }
    public withPath(path: string): RepoFileDOV5 {
        this['path'] = path;
        return this;
    }
    public withFullPath(fullPath: string): RepoFileDOV5 {
        this['full_path'] = fullPath;
        return this;
    }
    public set fullPath(fullPath: string  | undefined) {
        this['full_path'] = fullPath;
    }
    public get fullPath(): string | undefined {
        return this['full_path'];
    }
    public withSize(size: number): RepoFileDOV5 {
        this['size'] = size;
        return this;
    }
    public withMd5(md5: string): RepoFileDOV5 {
        this['md5'] = md5;
        return this;
    }
    public withSha256(sha256: string): RepoFileDOV5 {
        this['sha256'] = sha256;
        return this;
    }
    public withDownloadUrl(downloadUrl: string): RepoFileDOV5 {
        this['download_url'] = downloadUrl;
        return this;
    }
    public set downloadUrl(downloadUrl: string  | undefined) {
        this['download_url'] = downloadUrl;
    }
    public get downloadUrl(): string | undefined {
        return this['download_url'];
    }
    public withDownloadUrlWithId(downloadUrlWithId: string): RepoFileDOV5 {
        this['download_url_with_id'] = downloadUrlWithId;
        return this;
    }
    public set downloadUrlWithId(downloadUrlWithId: string  | undefined) {
        this['download_url_with_id'] = downloadUrlWithId;
    }
    public get downloadUrlWithId(): string | undefined {
        return this['download_url_with_id'];
    }
    public withWebUrl(webUrl: string): RepoFileDOV5 {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withVersionEnable(versionEnable: boolean): RepoFileDOV5 {
        this['version_enable'] = versionEnable;
        return this;
    }
    public set versionEnable(versionEnable: boolean  | undefined) {
        this['version_enable'] = versionEnable;
    }
    public get versionEnable(): boolean | undefined {
        return this['version_enable'];
    }
    public withMigratedState(migratedState: number): RepoFileDOV5 {
        this['migrated_state'] = migratedState;
        return this;
    }
    public set migratedState(migratedState: number  | undefined) {
        this['migrated_state'] = migratedState;
    }
    public get migratedState(): number | undefined {
        return this['migrated_state'];
    }
    public withUploadId(uploadId: string): RepoFileDOV5 {
        this['upload_id'] = uploadId;
        return this;
    }
    public set uploadId(uploadId: string  | undefined) {
        this['upload_id'] = uploadId;
    }
    public get uploadId(): string | undefined {
        return this['upload_id'];
    }
}