<?php
/**
 *  +----------------------------------------------------------------------
 *  | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
 *  +----------------------------------------------------------------------
 *  | Copyright (c) 2016~2022 https://www.crmeb.com All rights reserved.
 *  +----------------------------------------------------------------------
 *  | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
 *  +----------------------------------------------------------------------
 *  | Author: CRMEB Team <admin@crmeb.com>
 *  +----------------------------------------------------------------------
 */

namespace crmeb\services\crud;

/**
 * Class Validate
 * @author 等风来
 * @email 136327134@qq.com
 * @date 2023/3/29
 * @package crmeb\services\crud
 */
class Validate extends Make
{
    /**
     * @var string
     */
    protected $name = 'validate';

    /**
     * @return string
     * @author 等风来
     * @email 136327134@qq.com
     * @date 2023/4/4
     */
    protected function setBaseDir(): string
    {
        return 'app' . DS . 'adminapi' . DS . 'validate' . DS . 'crud';
    }

    /**
     * @param string $name
     * @param array $options
     * @return Validate
     * @author 等风来
     * @email 136327134@qq.com
     * @date 2023/4/23
     */
    public function handle(string $name, array $options = [])
    {
        [$rule, $message] = $this->getRuleContent($options['field']);
        $this->value['rule-php'] = $rule;
        $this->value['message-php'] = $message;
        $this->value['modelName'] = $options['modelName'] ?? $name;
        return parent::handle($name, $options); // TODO: Change the autogenerated stub
    }

    /**
     * @param array $field
     * @return array
     * @author 等风来
     * @email 136327134@qq.com
     * @date 2023/4/23
     */
    protected function getRuleContent(array $field)
    {
        $content = [];
        $message = [];
        foreach ($field as $item) {
            $item['name'] = addslashes($item['name']);
            if ($item['required']) {
                $content[] = $this->tab(2) . '\'' . $item['field'] . '\'=>\'require\',';
                $message[] = $this->tab(2) . '\'' . $item['field'] . '.require\'=>\'' . $item['name'] . '必须填写\',';
            }
        }
        return [implode("\n", $content), implode("\n", $message)];
    }

    /**
     * 模板文件配置
     * @param string $type
     * @return mixed
     */
    protected function getStub(string $type = '')
    {
        return __DIR__ . DS . 'stubs' . DS . 'validate' . DS . 'crudValidate.stub';
    }
}