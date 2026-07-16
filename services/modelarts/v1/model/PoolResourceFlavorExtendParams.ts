

export class PoolResourceFlavorExtendParams {
    public dockerBaseSize?: string;
    public constructor() { 
    }
    public withDockerBaseSize(dockerBaseSize: string): PoolResourceFlavorExtendParams {
        this['dockerBaseSize'] = dockerBaseSize;
        return this;
    }
}