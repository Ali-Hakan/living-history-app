import { useState } from "react";
import { Button, Card, Checkbox, Form, Input, Layout, Modal, Select } from "antd";
import _styles from "../styles/signup.module.css";
import styles from "../styles/login.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { _Item, _Password } from "@/components/styled";

const Signup: React.FC = () => {
    const { Content } = Layout;
    const { Option } = Select;
    const [form] = Form.useForm();
    const [modalVisible, setModalVisible] = useState(false);

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        }
    };

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };

    function onFinish(values: any): void {
        throw new Error("Function not implemented.");
    }

    return (
        <Layout
            className={styles["layout"]}>
            <Header />
            <Content
                className={styles["content"]}>
                <Card
                    className={_styles["card"]}>
                    <Form
                        {...formItemLayout}
                        className={_styles["form"]}
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        initialValues={{ prefix: "90" }}
                        style={{ maxWidth: 600 }}
                        scrollToFirstError>
                        <_Item
                            className={_styles["_item"]}
                            name="email"
                            label="E-mail"
                            rules={[{
                                type: "email",
                                message: "Do not jest, for this is not an electronic letter!"
                            },
                            {
                                required: true,
                                message: "We must know where to send our messages, so prithee, inform us."
                            }]}>
                            <Input />
                        </_Item>
                        <_Item
                            className={_styles["_item"]}
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: "I shall not reveal thy secret to anyone... mayhaps.",
                                },
                            ]}
                            hasFeedback>
                            <_Password />
                        </_Item>
                        <_Item
                            {...formItemLayout}
                            className={_styles["_item"]}
                            name="confirm"
                            label="Confirm Password"
                            dependencies={["password"]}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: "Equality is the crux of this matter.",
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue("password") === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error("Equality is the crux of this matter."));
                                    },
                                }),
                            ]}>
                            <_Password />
                        </_Item>
                        <_Item
                            className={_styles["_item"]}
                            name="username"
                            label="Username"
                            rules={[{ required: true, message: "Every soul hath a name, and deserves to be called by it.", whitespace: true }]}>
                            <Input />
                        </_Item>
                        <_Item
                            className={_styles["_item"]}
                            name="nickname"
                            label="Nickname"
                            tooltip="Thus shall others perceive thee, as portrayed herein."
                            rules={[{ required: true, message: "Disclose thy true identity, that we may know thee better!", whitespace: true }]}>
                            <Input />
                        </_Item>
                        <Form.Item
                            name="gender"
                            label="Gender">
                            <Select
                                placeholder="Human">
                                <Option value="male">{"Male"}</Option>
                                <Option value="female">{"Female"}</Option>
                                <Option value="other">{"Other"}</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject(new Error("Thou canst not evade this, for it is thine obligation.")),
                                },
                            ]}
                            {...tailFormItemLayout}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className={styles["form-button-login"]}
                                block>
                                {"Submit"}
                            </Button>
                            <Checkbox>
                                {"I agree to the"}
                            </Checkbox>
                            <Button
                                className={_styles["button"]}
                                type={"link"}
                                onClick={() => setModalVisible(true)}>
                                {"Terms and Conditions"}
                            </Button>
                            <Modal
                                title="Terms and Conditions"
                                open={modalVisible}
                                bodyStyle={{ fontFamily: "sans-serif" }}
                                closable={false}
                                footer={[
                                    <><Button
                                        className={styles["form-button-login"]}
                                        type={"primary"}
                                        onClick={() => setModalVisible(false)}>
                                        {"Yes!"}
                                    </Button>
                                        <Button
                                            className={styles["form-button-login"]}
                                            type={"primary"}
                                            onClick={() => setModalVisible(false)}>
                                            {"Certainly!"}
                                        </Button></>]}>
                                {"Verily, by submitting this form, thou dost accept the sacrifice of thine unborn child to the devil. May God forbid thy sin and cleanse thy soul, for such a pact with the infernal powers canst bring naught but damnation upon thee."}
                            </Modal>
                        </Form.Item>
                    </Form>
                </Card>
            </Content>
            <Footer />
        </Layout>
    );
};

export default Signup