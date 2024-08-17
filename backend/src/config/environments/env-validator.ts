import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  validateSync,
} from 'class-validator';
import { plainToClass } from 'class-transformer';

enum NodeEnvEnum {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

/**
 * ①
 * バリデーションしたい環境変数がある場合はここに記載
 * バリデーションに失敗するとアプリケーションは起動しません。
 */
export class EnvValidator {
  @IsEnum(NodeEnvEnum)
  NODE_ENV: NodeEnvEnum;

  @IsNumber()
  PORT = 3333; // デフォルト値も指定できる

  @IsNotEmpty()
  @IsString()
  DATABASE_URL: string;
}

/**
 * ②
 * @param config バリデーション対象の Record<string, any>。今回は .env.development.local と 環境変数が合体したもの
 * @returns バリデーション済の Record<string, any>
 */
export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvValidator, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
