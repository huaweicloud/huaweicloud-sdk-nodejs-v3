

export class InstanceDistribution {
    private 'encrypt_decrypt'?: number;
    private 'sign_verify'?: number;
    public kms?: number;
    public timestamp?: number;
    private 'colla_sign'?: number;
    public otp?: number;
    private 'db_encrypt'?: number;
    private 'file_encrypt'?: number;
    private 'digit_seal'?: number;
    private 'ssl_vpn'?: number;
    public constructor(encryptDecrypt?: number, signVerify?: number, kms?: number, timestamp?: number, collaSign?: number, otp?: number, dbEncrypt?: number, fileEncrypt?: number, digitSeal?: number, sslVpn?: number) { 
        this['encrypt_decrypt'] = encryptDecrypt;
        this['sign_verify'] = signVerify;
        this['kms'] = kms;
        this['timestamp'] = timestamp;
        this['colla_sign'] = collaSign;
        this['otp'] = otp;
        this['db_encrypt'] = dbEncrypt;
        this['file_encrypt'] = fileEncrypt;
        this['digit_seal'] = digitSeal;
        this['ssl_vpn'] = sslVpn;
    }
    public withEncryptDecrypt(encryptDecrypt: number): InstanceDistribution {
        this['encrypt_decrypt'] = encryptDecrypt;
        return this;
    }
    public set encryptDecrypt(encryptDecrypt: number  | undefined) {
        this['encrypt_decrypt'] = encryptDecrypt;
    }
    public get encryptDecrypt(): number | undefined {
        return this['encrypt_decrypt'];
    }
    public withSignVerify(signVerify: number): InstanceDistribution {
        this['sign_verify'] = signVerify;
        return this;
    }
    public set signVerify(signVerify: number  | undefined) {
        this['sign_verify'] = signVerify;
    }
    public get signVerify(): number | undefined {
        return this['sign_verify'];
    }
    public withKms(kms: number): InstanceDistribution {
        this['kms'] = kms;
        return this;
    }
    public withTimestamp(timestamp: number): InstanceDistribution {
        this['timestamp'] = timestamp;
        return this;
    }
    public withCollaSign(collaSign: number): InstanceDistribution {
        this['colla_sign'] = collaSign;
        return this;
    }
    public set collaSign(collaSign: number  | undefined) {
        this['colla_sign'] = collaSign;
    }
    public get collaSign(): number | undefined {
        return this['colla_sign'];
    }
    public withOtp(otp: number): InstanceDistribution {
        this['otp'] = otp;
        return this;
    }
    public withDbEncrypt(dbEncrypt: number): InstanceDistribution {
        this['db_encrypt'] = dbEncrypt;
        return this;
    }
    public set dbEncrypt(dbEncrypt: number  | undefined) {
        this['db_encrypt'] = dbEncrypt;
    }
    public get dbEncrypt(): number | undefined {
        return this['db_encrypt'];
    }
    public withFileEncrypt(fileEncrypt: number): InstanceDistribution {
        this['file_encrypt'] = fileEncrypt;
        return this;
    }
    public set fileEncrypt(fileEncrypt: number  | undefined) {
        this['file_encrypt'] = fileEncrypt;
    }
    public get fileEncrypt(): number | undefined {
        return this['file_encrypt'];
    }
    public withDigitSeal(digitSeal: number): InstanceDistribution {
        this['digit_seal'] = digitSeal;
        return this;
    }
    public set digitSeal(digitSeal: number  | undefined) {
        this['digit_seal'] = digitSeal;
    }
    public get digitSeal(): number | undefined {
        return this['digit_seal'];
    }
    public withSslVpn(sslVpn: number): InstanceDistribution {
        this['ssl_vpn'] = sslVpn;
        return this;
    }
    public set sslVpn(sslVpn: number  | undefined) {
        this['ssl_vpn'] = sslVpn;
    }
    public get sslVpn(): number | undefined {
        return this['ssl_vpn'];
    }
}