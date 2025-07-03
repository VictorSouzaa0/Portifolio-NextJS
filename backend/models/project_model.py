from sqlalchemy import Column, Integer, String

from core.database import Base

class Projects(Base):
    __tablename__ = "projects"

    id: int = Column(Integer, primary_key=True, index=True)
    image: str =  Column(String(2048), nullable=True)
    title: str = Column(String(255), nullable=False)
    description: str = Column(String, nullable=False)
    url_project: str = Column(String(2048), nullable=True)
