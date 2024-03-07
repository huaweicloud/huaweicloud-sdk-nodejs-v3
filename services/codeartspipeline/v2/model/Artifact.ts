import { ArtifactHashCode } from './ArtifactHashCode';


export class Artifact {
    private 'project_id'?: string;
    public name?: string;
    private 'artifact_version'?: string;
    private 'upload_target'?: string;
    private 'artifact_package_type'?: string;
    private 'artifact_uri'?: string;
    private 'artifact_download_url_with_id'?: string;
    private 'artifact_type'?: string;
    private 'hash_code'?: Array<ArtifactHashCode>;
    private 'job_id'?: string;
    private 'build_no'?: number;
    private 'daily_build_number'?: string;
    private 'file_size'?: string;
    public constructor() { 
    }
    public withProjectId(projectId: string): Artifact {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withName(name: string): Artifact {
        this['name'] = name;
        return this;
    }
    public withArtifactVersion(artifactVersion: string): Artifact {
        this['artifact_version'] = artifactVersion;
        return this;
    }
    public set artifactVersion(artifactVersion: string  | undefined) {
        this['artifact_version'] = artifactVersion;
    }
    public get artifactVersion(): string | undefined {
        return this['artifact_version'];
    }
    public withUploadTarget(uploadTarget: string): Artifact {
        this['upload_target'] = uploadTarget;
        return this;
    }
    public set uploadTarget(uploadTarget: string  | undefined) {
        this['upload_target'] = uploadTarget;
    }
    public get uploadTarget(): string | undefined {
        return this['upload_target'];
    }
    public withArtifactPackageType(artifactPackageType: string): Artifact {
        this['artifact_package_type'] = artifactPackageType;
        return this;
    }
    public set artifactPackageType(artifactPackageType: string  | undefined) {
        this['artifact_package_type'] = artifactPackageType;
    }
    public get artifactPackageType(): string | undefined {
        return this['artifact_package_type'];
    }
    public withArtifactUri(artifactUri: string): Artifact {
        this['artifact_uri'] = artifactUri;
        return this;
    }
    public set artifactUri(artifactUri: string  | undefined) {
        this['artifact_uri'] = artifactUri;
    }
    public get artifactUri(): string | undefined {
        return this['artifact_uri'];
    }
    public withArtifactDownloadUrlWithId(artifactDownloadUrlWithId: string): Artifact {
        this['artifact_download_url_with_id'] = artifactDownloadUrlWithId;
        return this;
    }
    public set artifactDownloadUrlWithId(artifactDownloadUrlWithId: string  | undefined) {
        this['artifact_download_url_with_id'] = artifactDownloadUrlWithId;
    }
    public get artifactDownloadUrlWithId(): string | undefined {
        return this['artifact_download_url_with_id'];
    }
    public withArtifactType(artifactType: string): Artifact {
        this['artifact_type'] = artifactType;
        return this;
    }
    public set artifactType(artifactType: string  | undefined) {
        this['artifact_type'] = artifactType;
    }
    public get artifactType(): string | undefined {
        return this['artifact_type'];
    }
    public withHashCode(hashCode: Array<ArtifactHashCode>): Artifact {
        this['hash_code'] = hashCode;
        return this;
    }
    public set hashCode(hashCode: Array<ArtifactHashCode>  | undefined) {
        this['hash_code'] = hashCode;
    }
    public get hashCode(): Array<ArtifactHashCode> | undefined {
        return this['hash_code'];
    }
    public withJobId(jobId: string): Artifact {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBuildNo(buildNo: number): Artifact {
        this['build_no'] = buildNo;
        return this;
    }
    public set buildNo(buildNo: number  | undefined) {
        this['build_no'] = buildNo;
    }
    public get buildNo(): number | undefined {
        return this['build_no'];
    }
    public withDailyBuildNumber(dailyBuildNumber: string): Artifact {
        this['daily_build_number'] = dailyBuildNumber;
        return this;
    }
    public set dailyBuildNumber(dailyBuildNumber: string  | undefined) {
        this['daily_build_number'] = dailyBuildNumber;
    }
    public get dailyBuildNumber(): string | undefined {
        return this['daily_build_number'];
    }
    public withFileSize(fileSize: string): Artifact {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: string  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): string | undefined {
        return this['file_size'];
    }
}