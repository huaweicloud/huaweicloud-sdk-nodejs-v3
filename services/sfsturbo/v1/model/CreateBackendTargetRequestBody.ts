import { ObsDataRepository } from './ObsDataRepository';


export class CreateBackendTargetRequestBody {
    private 'file_system_path'?: string;
    public obs?: ObsDataRepository;
    public constructor(fileSystemPath?: string, obs?: ObsDataRepository) { 
        this['file_system_path'] = fileSystemPath;
        this['obs'] = obs;
    }
    public withFileSystemPath(fileSystemPath: string): CreateBackendTargetRequestBody {
        this['file_system_path'] = fileSystemPath;
        return this;
    }
    public set fileSystemPath(fileSystemPath: string  | undefined) {
        this['file_system_path'] = fileSystemPath;
    }
    public get fileSystemPath(): string | undefined {
        return this['file_system_path'];
    }
    public withObs(obs: ObsDataRepository): CreateBackendTargetRequestBody {
        this['obs'] = obs;
        return this;
    }
}