import "antd/dist/antd.css";
import "./App.css";
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Anchor } from 'antd';
import React from 'react';
import allRoute from './route';

const { Link } = Anchor;

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Chinmay",
      email: "Chinmay@gmail.com",
      Branch: "IT",
    },
    {
      id: 2,
      name: "Dipesh",
      email: "Dipesh@gmail.com",
      Branch: "IT",
    },
    {
      id: 3,
      name: "Arjun",
      email: "Arjun@gmail.com",
      Branch: "IT",
    },
    {
      id: 4,
      name: "Akhilesh",
      email: "Akhilesh@gmail.com",
      Branch: "IT",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Branch",
      dataIndex: "Branch",
    },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
           

          </>
        );
      },
    },

    {
      key: "6",
      title: "View",
      render: (record) =>{
        return(
          <Anchor>
            <Link href={allRoute.view} title="View" /> 
          </Anchor>
        )
      }

    }
  ];

  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      id: randomNumber,
      name: "Name ",
      email: randomNumber + "@gmail.com",
      Branch: "Branch",
    };
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
  };
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={onAddStudent}>Add a new Student</Button>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Student"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.id === editingStudent.id) {
                  return editingStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingStudent?.id}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, id: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.name}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.email}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.Branch}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, Branch: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
  );
}

export default App;
