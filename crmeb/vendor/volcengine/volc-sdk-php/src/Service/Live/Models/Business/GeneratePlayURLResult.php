<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: live/business/addr.proto

namespace Volc\Service\Live\Models\Business;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>Volcengine.Live.Models.Business.GeneratePlayURLResult</code>
 */
class GeneratePlayURLResult extends \Google\Protobuf\Internal\Message
{
    /**
     *播放地址详情列表
     *
     * Generated from protobuf field <code>repeated .Volcengine.Live.Models.Business.PlayURL URLList = 1;</code>
     */
    private $URLList;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Volc\Service\Live\Models\Business\PlayURL[]|\Google\Protobuf\Internal\RepeatedField $URLList
     *          播放地址详情列表
     * }
     */
    public function __construct($data = NULL) {
        \Volc\Service\Live\Models\GPBMetadata\Addr::initOnce();
        parent::__construct($data);
    }

    /**
     *播放地址详情列表
     *
     * Generated from protobuf field <code>repeated .Volcengine.Live.Models.Business.PlayURL URLList = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getURLList()
    {
        return $this->URLList;
    }

    /**
     *播放地址详情列表
     *
     * Generated from protobuf field <code>repeated .Volcengine.Live.Models.Business.PlayURL URLList = 1;</code>
     * @param \Volc\Service\Live\Models\Business\PlayURL[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setURLList($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Volc\Service\Live\Models\Business\PlayURL::class);
        $this->URLList = $arr;

        return $this;
    }

}
