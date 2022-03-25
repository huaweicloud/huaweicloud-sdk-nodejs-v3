

export class Retry {
    public name?: string;
    public delay?: number;
    private 'max_attempts'?: number | undefined;
    public constructor() { 
    }
    public withName(name: string): Retry {
        this['name'] = name;
        return this;
    }
    public withDelay(delay: number): Retry {
        this['delay'] = delay;
        return this;
    }
    public withMaxAttempts(maxAttempts: number): Retry {
        this['max_attempts'] = maxAttempts;
        return this;
    }
    public set maxAttempts(maxAttempts: number | undefined) {
        this['max_attempts'] = maxAttempts;
    }
    public get maxAttempts() {
        return this['max_attempts'];
    }
}