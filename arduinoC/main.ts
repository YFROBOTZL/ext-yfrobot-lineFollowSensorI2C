/** 
 * @file yfrobot
 * @brief YFROBOT's sensors Mind+ library.
 * @n This is a MindPlus graphics programming extension for YFROBOT's module.
 * 
 * @copyright    YFROBOT,2022
 * @copyright    MIT Lesser General Public License
 * 
 * @author [email](yfrobot@qq.com)
 * @date  2022-02-22
*/

enum LINEFOLLOWSENSORSNUM {
    //% blockId="LFS_1" block="①"
    0,
    //% blockId="LFS_2" block="②"
    1,
    //% blockId="LFS_3" block="③"
    2,
    //% blockId="LFS_4" block="④"
    3,
    //% blockId="LFS_5" block="⑤"
    4,
    //% blockId="LFS_6" block="⑥"
    5,
    //% blockId="LFS_7" block="⑦"
    6,
}

//% color="#ff6f0c" iconWidth=50 iconHeight=40
namespace lineFollow_I2C {

    //% block="read line follow sensor [LFS_NUM] state" blockType="boolean"
    //% LFS_NUM.shadow="dropdown" LFS_NUM.options="LINEFOLLOWSENSORSNUM" LFS_NUM.defl="LINEFOLLOWSENSORSNUM.0"
    export function readLineFollowSensorsI2C(parameter: any, block: any) {
        let lfs_num = parameter.LFS_NUM.code;
        Generator.addInclude("include_yfrobot_linefollow_library", `#include "YFLineFollow.h"`);
        Generator.addObject("object_yfrobot_linefollow", `YFLINEFOLLOW`, `yfLS;`);
        Generator.addSetup(`initSetup_yfrobot_linefollow`, `if (yfLS.begin() == false) { \n    while (1) ; // If we fail to communicate, loop forever. \n  }\n  yfLS.enableSensor(); // 使能传感器，默认使能`);
        Generator.addCode(`yfLS.readSensor(${lfs_num})`);
    }

}
