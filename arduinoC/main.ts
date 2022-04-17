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
    //% blockId="LFS_1" block="1"
    0,
    //% blockId="LFS_2" block="2"
    1,
    //% blockId="LFS_3" block="3"
    2,
    //% blockId="LFS_4" block="4"
    3,
    //% blockId="LFS_5" block="5"
    4,
    //% blockId="LFS_6" block="6"
    5,
    //% blockId="LFS_7" block="7"
    6,
}

//% color="#ff6f0c" iconWidth=50 iconHeight=40
namespace lineFollow_I2C {

    //% block="read line follow sensor on [LFS_NUM]" blockType="boolean"
    //% LFS_NUM.shadow="dropdown" LFS_NUM.options="LINEFOLLOWSENSORSNUM" LFS_NUM.defl="LINEFOLLOWSENSORSNUM.0"
    export function readLineFollowSensors(parameter: any, block: any) {
        let lfs_num = parameter.LFS_NUM.code;
        Generator.addInclude("include_yfrobot_linefollow_library", `#include <Wire.h>           // Include the I2C library (required) \n#include "YFLineFollow.h"`);
        Generator.addObject("object_yfrobot_linefollow", `YFLINEFOLLOW`, `yfLS;`);
        Generator.addSetup(`initSetup_yfrobot_linefollow`, `if (yfLS.begin() == false) { \n    Serial.println("Failed to communicate. Check wiring."); \n    while (1) ; // If we fail to communicate, loop forever. \n  }`);
        Generator.addCode(`yfLS.readSensor(${lfs_num})`);
    }


}
