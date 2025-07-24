

export class AddTestCaseResultLogInfo {
    private 'release_dev'?: string;
    public constructor() { 
    }
    public withReleaseDev(releaseDev: string): AddTestCaseResultLogInfo {
        this['release_dev'] = releaseDev;
        return this;
    }
    public set releaseDev(releaseDev: string  | undefined) {
        this['release_dev'] = releaseDev;
    }
    public get releaseDev(): string | undefined {
        return this['release_dev'];
    }
}