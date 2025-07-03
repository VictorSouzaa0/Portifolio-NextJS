from typing import Optional
from pydantic import BaseModel as SCBaseModel

class ProjectSchema(SCBaseModel):

    id: Optional[int] = None
    image: str
    title: str
    description: str
    url_project: str

    class Config:
        from_attributes = True
        