/*
 * Copyright 2020 Huawei Technologies Co.,Ltd.
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as crypto from 'crypto';
import { SdkException } from '../exception/SdkException';

/**
 * HKDF是一种基于HMAC的密钥导出函数，分为提取和扩展两步，用于从短密钥材料生成更长的密钥
 */
export class HKDF {
  private static HMAC_SHA1 = 'sha1';

  private static HMAC_SHA256 = 'sha256';

  private static DERIVATION_KEY_LENGTH = 32;

  private static HMAC_ALGORITHM = HKDF.HMAC_SHA256;

  private static ALGORITHM_HASH_LENGTH = HKDF.getHashLen(HKDF.HMAC_ALGORITHM);

  private static EXPAND_CEIL = Math.ceil(
    HKDF.DERIVATION_KEY_LENGTH / HKDF.ALGORITHM_HASH_LENGTH
  );

  public static getDerKeySHA256(
    accessKey: string | undefined,
    secretKey: string | undefined,
    info: string
  ): string | null {
    if (!accessKey || !secretKey) {
      return null;
    }
    try {
      const tmpKey = HKDF.extract(
        HKDF.stringToBinary(secretKey),
        HKDF.stringToBinary(accessKey),
        HKDF.HMAC_ALGORITHM
      );
      const derSecretKey = HKDF.expand(
        tmpKey,
        HKDF.stringToBinary(info),
        HKDF.HMAC_ALGORITHM,
        HKDF.DERIVATION_KEY_LENGTH,
        HKDF.EXPAND_CEIL
      );
      if (!derSecretKey) {
        return null;
      }
      return HKDF.toHex(derSecretKey);
    } catch (e) {
      throw new SdkException(`Failed to derive AK ${accessKey} with info ${info}`);
    }
  }

  public static toHex(data: Buffer): string {
    return data.toString('hex').toLowerCase();
  }

  private static extract(
    ikm: Buffer,
    salt: Buffer,
    hmacAlgorithm: string
  ): Buffer {
    let saltTemp = salt;
    if (salt === null || salt.length === 0) {
      saltTemp = Buffer.alloc(HKDF.getHashLen(hmacAlgorithm));
    }
    return HKDF.hmacSHA256(ikm, saltTemp, hmacAlgorithm);
  }

  private static expand(
    prk: Buffer,
    info: Buffer,
    hmacAlgorithm: string,
    okmLength: number,
    ceil: number
  ): null | Buffer {
    let rawResult: Buffer = Buffer.alloc(0);
    if (ceil === 1) {
      rawResult = HKDF.expandFirst(prk, info, hmacAlgorithm);
    } else {
      let temp = Buffer.alloc(0);
      for (let i = 1; i <= ceil; ++i) {
        temp = HKDF.expandOnce(prk, info, temp, i, hmacAlgorithm);
        rawResult = Buffer.concat(
          [rawResult, temp],
          rawResult.length + temp.length
        );
      }
    }
    if (okmLength === rawResult.length) {
      return rawResult;
    } else if (okmLength < rawResult.length) {
      return rawResult.slice(0, okmLength);
    } else {
      return null;
    }
  }

  private static expandFirst(
    prk: Buffer,
    info: Buffer,
    hmacAlgorithm: string
  ): Buffer {
    let result = Buffer.alloc(info.length + 1);
    info.copy(result);
    result.writeUInt8(0x01, result.length - 1);
    return HKDF.hmacSHA256(result, prk, hmacAlgorithm);
  }

  private static expandOnce(
    prk: Buffer,
    info: Buffer,
    preTemp: Buffer,
    i: number,
    hmacAlgorithm: string
  ): Buffer {
    let result = Buffer.concat([preTemp, info], preTemp.length + info.length);
    result.writeUInt8(i, result.length);
    return HKDF.hmacSHA256(result, prk, hmacAlgorithm);
  }

  private static getHashLen(hmacAlgorithm: string): number {
    switch (hmacAlgorithm) {
      case HKDF.HMAC_SHA1:
        return 20;
      case HKDF.HMAC_SHA256:
      default:
        return 32;
    }
  }

  private static hmacSHA256 = (
    str: Buffer,
    key: Buffer,
    hmacAlgorithm: string
  ): Buffer => {
    return HKDF.hexStringToBinary(
      crypto
        .createHmac(hmacAlgorithm, key)
        .update(str)
        .digest('hex')
    );
  };

  private static hexStringToBinary(hexString: string) {
    // 将16进制字符串转换为Buffer对象
    const buffer = Buffer.from(hexString, 'hex');
    // 返回Buffer对象
    return buffer;
  }

  private static stringToBinary(hexString: string) {
    // 将16进制字符串转换为Buffer对象
    const buffer = Buffer.from(hexString, 'utf-8');
    // 返回Buffer对象
    return buffer;
  }
}
