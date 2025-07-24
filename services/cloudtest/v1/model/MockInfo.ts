

export class MockInfo {
    private 'mock_id'?: string;
    private 'mock_switch'?: boolean;
    private 'mock_url'?: string;
    public constructor() { 
    }
    public withMockId(mockId: string): MockInfo {
        this['mock_id'] = mockId;
        return this;
    }
    public set mockId(mockId: string  | undefined) {
        this['mock_id'] = mockId;
    }
    public get mockId(): string | undefined {
        return this['mock_id'];
    }
    public withMockSwitch(mockSwitch: boolean): MockInfo {
        this['mock_switch'] = mockSwitch;
        return this;
    }
    public set mockSwitch(mockSwitch: boolean  | undefined) {
        this['mock_switch'] = mockSwitch;
    }
    public get mockSwitch(): boolean | undefined {
        return this['mock_switch'];
    }
    public withMockUrl(mockUrl: string): MockInfo {
        this['mock_url'] = mockUrl;
        return this;
    }
    public set mockUrl(mockUrl: string  | undefined) {
        this['mock_url'] = mockUrl;
    }
    public get mockUrl(): string | undefined {
        return this['mock_url'];
    }
}